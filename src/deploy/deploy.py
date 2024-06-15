import os
import shutil

# Define the source directory (one level above the current directory)
source_directory = os.path.abspath(os.path.join(os.getcwd(), ".."))

# Define the destination directory
destination_directory = "deploy/production-checklist"

# Define the full path for the destination directory
destination_path = os.path.join(source_directory, destination_directory)

# Ensure the destination directory exists or create it if it doesn't
if not os.path.exists(destination_path):
    os.makedirs(destination_path)

# Mapping of file extensions and their corresponding paths
file_extensions = {
    ".html": ".hbs"
}

# Loop through the files in the source directory
for filename in os.listdir(source_directory):
    if filename == "sample-checklist-template.html":
        # Skip the file named "sample.html"
        continue

    # Get the file extension
    file_extension = os.path.splitext(filename)[1]

    if file_extension in file_extensions:
        # Get the new file extension and destination path
        new_extension = file_extensions[file_extension]
        destination_file_path = os.path.join(destination_path, "page-" + os.path.splitext(filename)[0] + new_extension)

        # Read the content of the HTML file with UTF-8 encoding
        with open(os.path.join(source_directory, filename), "r", encoding="utf-8") as html_file:
            html_content = html_file.read()

        # Update the CSS and JS file paths within the HTML content
        updated_html_content = html_content.replace('checklist-style.css', '/assets/css/checklist/checklist-style.css')
        updated_html_content = updated_html_content.replace('checklist-track.js', '/assets/js/checklist/checklist-track.js')

        # Write the updated content to the destination file with the new extension
        with open(destination_file_path, "w", encoding="utf-8") as destination_file:
            destination_file.write(updated_html_content)

print("Conversion completed.")