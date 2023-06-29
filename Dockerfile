# Use the base Rasa image
FROM rasa/rasa:3.5.10

# Set the working directory
WORKDIR /app

# Copy the Rasa project files
COPY . /app

# Set the Rasa environment variables
ENV PYTHONPATH=/app:$PYTHONPATH
ENV RASA_TELEMETRY_ENABLED=false

# Expose the Rasa server port (adjust as needed)
EXPOSE 5005

# Set the entrypoint command
ENTRYPOINT ["rasa", "run", "-m", "models", "--enable-api", "--cors", "*", "--debug"]