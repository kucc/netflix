FROM openjdk:11-jdk@sha256:1b04b1958a4a61900feec994e3938a2a5d8f88db8ec9515f46a25cbe561b65d9 AS builder
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew clean build
RUN ./gradlew bootJar

FROM openjdk:11-jdk
COPY --from=builder build/libs/*.jar app.jar


EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]