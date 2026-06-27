package com.finwise.api.application.service;

import com.finwise.api.application.dto.AuthResponseDto;
import com.finwise.api.application.dto.UserCreateDto;
import com.finwise.api.application.dto.UserDto;
import com.finwise.api.application.dto.UserLoginDto;
import com.finwise.api.domain.entity.User;
import com.finwise.api.domain.entity.UserRole;
import com.finwise.api.domain.exception.ResourceAlreadyExistsException;
import com.finwise.api.domain.exception.ResourceNotFoundException;
import com.finwise.api.domain.repository.UserRepository;
import com.finwise.api.infrastructure.security.JwtTokenProvider;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtTokenProvider jwtTokenProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    public UserDto register(UserCreateDto createDto) {
        if (userRepository.existsByEmail(createDto.getEmail())) {
            throw new ResourceAlreadyExistsException("User already exists with email: " + createDto.getEmail());
        }

        User user = new User();
        user.setName(createDto.getName());
        user.setEmail(createDto.getEmail());
        user.setPassword(passwordEncoder.encode(createDto.getPassword()));
        user.setRole(UserRole.USER);

        User saved = userRepository.save(user);
        return toDto(saved);
    }

    public AuthResponseDto authenticate(UserLoginDto loginDto) {
        User user = userRepository.findByEmail(loginDto.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid credentials"));

        if (!passwordEncoder.matches(loginDto.getPassword(), user.getPassword())) {
            throw new ResourceNotFoundException("Invalid credentials");
        }

        String accessToken = jwtTokenProvider.createAccessToken(user.getEmail(), user.getRole().name());
        String refreshToken = jwtTokenProvider.createRefreshToken(user.getEmail());
        return new AuthResponseDto(accessToken, refreshToken);
    }

    public AuthResponseDto refreshToken(String refreshToken) {
        if (!jwtTokenProvider.validateRefreshToken(refreshToken)) {
            throw new ResourceNotFoundException("Invalid refresh token");
        }

        String email = jwtTokenProvider.getEmailFromRefreshToken(refreshToken);
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        String accessToken = jwtTokenProvider.createAccessToken(user.getEmail(), user.getRole().name());
        String newRefreshToken = jwtTokenProvider.createRefreshToken(user.getEmail());
        return new AuthResponseDto(accessToken, newRefreshToken);
    }

    public UserDto getByEmail(String email) {
        return userRepository.findByEmail(email)
                .map(this::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    private UserDto toDto(User user) {
        return new UserDto(user.getId(), user.getName(), user.getEmail(), user.getRole().name(), user.getCreatedAt());
    }
}
