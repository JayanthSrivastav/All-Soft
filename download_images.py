import requests
import os

# List of tools data (reduced for clarity)
tools_data = [
    {
        'title': 'ngrok',
        'image': 'http://www.endtoend.ai/assets/blog/tutorial/ngrok-ssh-forwarding/ssh_ngrok.jpg'
    },
    {
        'title': 'Java',
        'image': 'https://www.oracle.com/img/tech/cb88-java-logo-001.jpg'
    },
    {
        'title': 'Maven',
        'image': 'https://user-images.githubusercontent.com/88981/188587693-5710e58b-c1ad-442c-ac06-e1aeab30a905.png'
    },
    {
        'title': 'Tomcat',
        'image': 'https://nsfocusglobal.com/wp-content/uploads/2019/04/apachetomcat.jpg'
    },
    {
        'title': 'Spring Boot',
        'image': 'https://cdn.hashnode.com/res/hashnode/image/upload/v1636832404785/mTXlsmro-.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
    },
    {
        'title': 'MongoDB',
        'image': 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png'
    },
    {
        'title': 'Postman',
        'image': 'https://miro.medium.com/max/894/1*0jyROv8ksMb6tZtlf2ewVQ.png'
    },
    {
        'title': 'Node.js',
        'image': 'https://www.devteam.space/wp-content/uploads/2022/05/nodejs.jpg'
    },
    {
        'title': 'Visual Studio Code',
        'image': 'https://code.visualstudio.com/opengraphimg/opengraph-blog.png'
    },
    {
        'title': 'GitHub',
        'image': 'https://miro.medium.com/max/1400/1*SSRjtoQ0H2X3SBPOiJ5rZw.jpeg'
    },
    {
        'title': 'React.js',
        'image': 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124'
    },
    {
        'title': 'Bootstrap',
        'image': 'https://getbootstrap.com/docs/5.2/assets/img/bootstrap-icons.png'
    },
    {
        'title': 'Material UI',
        'image': 'https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png'
    },
    {
        'title': 'Axios',
        'image': 'https://linuxhint.com/wp-content/uploads/2022/01/word-image-1086.png'
    },
    {
        'title': 'npm commands',
        'image': 'https://miro.medium.com/max/1400/1*sO5oyZhvbI0cW3SrZ9ZwCA.png'
    },
]

# Create a directory to save images
os.makedirs('downloaded_images', exist_ok=True)

# Download images
for tool in tools_data:
    title = tool['title']
    image_url = tool['image']
    
    try:
        response = requests.get(image_url)
        response.raise_for_status()  # Check for request errors
        
        # Clean title to use as a filename
        filename = f"downloaded_images/{title}.jpg"
        
        # Save the image
        with open(filename, 'wb') as file:
            file.write(response.content)
        print(f"Downloaded: {title}")
        
    except Exception as e:
        print(f"Failed to download {title}: {e}")

print("Download complete.")
