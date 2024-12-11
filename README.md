# Login and Registration Form

This project is a beautifully designed login and registration form built using **HTML**, **CSS**, and **JavaScript**. The design includes smooth animations, a responsive layout, and modern aesthetics, offering an excellent user experience.

## Features

- **Modern UI Design**: Clean, responsive, and visually appealing.
- **Interactive Animations**: Smooth transitions between login and registration forms.
- **User-Friendly Layout**: Simple and intuitive for users.
- **Customizable**: Easily adaptable for various projects.

## Technologies Used

- **HTML5**: Structure and content.
- **CSS3**: Styling and animations.
- **JavaScript**: Interactive functionality.

## How It Works

- **Login Form**: Users can enter their email and password to log in.
- **Registration Form**: Users can create an account by providing a username, email, and password.
- **Form Toggle**: Switch between login and registration forms with animated transitions.

## File Structure

\`\`\`
project-folder/
├── index.html # Main HTML file
├── styles.css # Stylesheet for design and animations
├── script.js # JavaScript for form functionality
\`\`\`

## Usage

1. Clone this repository:
   \`\`\`bash
   git clone https://github.com/<your-github-username>/login-registration-form.git
   \`\`\`

2. Open \`index.html\` in your browser to view the project.

3. Customize the design or integrate it with your back-end logic for functionality.

## Preview
<div style="width: 100%; position: relative;">
  <img src="screenshots/login.PNG" alt="Image 1" style="width: 100%; display: block;">
  <img src="screenshots/reg.PNG" alt="Image 2" style="width: 100%; display: none;">
  <script>
    let currentIndex = 0;
    const images = document.querySelectorAll('div img');
    setInterval(() => {
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = 'block';
    }, 3000);
  </script>
</div>

## Future Enhancements

- Integrate with a back-end server using PHP or Node.js.
- Add form validation for user inputs.
- Store user data in a database (e.g., MySQL).

## Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request with your enhancements or fixes.

## License

This project is licensed under the [MIT License](LICENSE).
`;
