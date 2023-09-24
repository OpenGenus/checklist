import os
import shutil

# Define the source directory (one level above the current directory)
source_directory = os.path.abspath(os.path.join(os.getcwd(), ".."))

# Define the destination directory
destination_directory = "deploy/checklist"

# Define the full path for the destination directory
destination_path = os.path.join(source_directory, destination_directory)

# Ensure the destination directory exists or create it if it doesn't
if not os.path.exists(destination_path):
    os.makedirs(destination_path)

# Loop through the HTML files in the source directory
for filename in os.listdir(source_directory):
    if filename == "sample-checklist-template.html":
        # Skip the file named "sample.html"
        continue

    if filename.endswith(".html"):
        # Generate the new .hbs filename
        new_filename = os.path.splitext(filename)[0] + ".hbs"

        # Define the source and destination file paths
        source_path = os.path.join(source_directory, filename)
        destination_file_path = os.path.join(destination_path, new_filename)

        # Copy the file and rename it with the .hbs extension
        shutil.copy(source_path, destination_file_path)

print("Conversion completed.")