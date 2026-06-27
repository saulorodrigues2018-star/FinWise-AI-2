package com.finwise.api.presentation.controller;

import com.finwise.api.application.dto.AuthResponseDto;
import com.finwise.api.application.dto.RefreshTokenRequestDto;
import com.finwise.api.application.dto.UserCreateDto;
import com.finwise.api.application.dto.UserDto;
import com.finwise.api.application.dto.UserLoginDto;
import com.finwise.api.application.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@Validated
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@Valid @RequestBody UserCreateDto createDto) {
        UserDto userDto = userService.register(createDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(userDto);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@Valid @RequestBody UserLoginDto loginDto) {
        AuthResponseDto response = userService.authenticate(loginDto);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/me")
    public ResponseEntity<UserDto> profile(Authentication authentication) {
        String email = authentication.getName();
        UserDto dto = userService.getByEmail(email);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponseDto> refresh(@RequestBody RefreshTokenRequestDto request) {
        AuthResponseDto response = userService.refreshToken(request.getRefreshToken());
        return ResponseEntity.ok(response);
    }
}
