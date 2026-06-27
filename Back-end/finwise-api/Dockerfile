FROM eclipse-temurin:21-jdk AS build

WORKDIR /workspace

COPY .mvn .mvn
COPY mvnw pom.xml ./
COPY src src

RUN chmod +x mvnw && \
    ./mvnw -B package -DskipTests

FROM eclipse-temurin:21-jdk
WORKDIR /app

COPY --from=build /workspace/target/finwise-api-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]