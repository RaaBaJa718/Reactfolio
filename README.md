# React Portfolio Project

This project is a personal portfolio built using **React** and **Vite**. It showcases my work, technical skills, and projects I have developed. The portfolio includes hover effects, direct links to live applications, GitHub repositories, and more.

# Features

* **Interactive Portfolio Grid**: Displays projects with titles, technologies used, and thumbnail previews.

* **Hover Effects**: GitHub icons and links appear when hovering over project thumbnails.

* **Responsive Design**: Ensures the portfolio is accessible across devices of all sizes.

* **Downloadable Resume**: Includes an embedded and linked resume in PDF format.

* **Deployed with Netlify**: Accessible online for sharing and showcasing.

# Technologies Used

* **React**: For building the UI components.

* **Vite**: As the development and build tool.

* **CSS**: Custom styling for responsiveness and hover effects.

* **Netlify**: Pages: For deployment.

# Installation and Setup
Follow these steps to run the project locally:

1. **Clone the Repository**

![Step 1: Clone the Repository](public/Icons/step1.png)

2. **Install Dependencies**
 
Ensure Node.js and npm are installed, then run:

![Step 2: Clone the Repository](public/Icons/step2.png)

3. **Run the Development Server**

Start the project locally using:

![Step 3: Clone the Repository](public/Icons/step3.png)
 
# Build and Deployment

1. **Build for Production**

Before deploying, ensure that the project is built for production:

![Step 1: Build for Production](public/Icons/build.png)

2. Deploy to Netlify
   
**Option 1: Drag and Drop**

* login to Netlify or create a free account if you don't have one.
  
* In the Netlify dashboard, click on **Add New Site > Deploy manually**.

* Drag and drop the <dist> folder into the upload area.

* Netlify will automatically deploy your site and provide you with a live URL.

**Option 2: Connect to GitHub**

* In the Netlify dashboard, click **Add New Site > Import an existing project**.

* Connect your GitHub account and select your repository.

* Configure the deployment settings:

   * **Build Command**: <npm run build>

   * **Publish Directory**: <dist> 

* Click **Deploy Site**, and Netlify will build and deploy your project directly from your repository.

3. **Set Up a Custom Domain (Optional)**

* Netlify automatically provides a default URL (e.g., https://your-site-name.netlify.app).

* To use a custom domain, go to the Domain Settings in your Netlify dashboard and follow the instructions to connect your domain.  

5. **Test Your Deployment**

* Open the live URL provided by Netlify.

* Ensure that the app works as expected and that all assets (CSS, images, etc.) load properly.
  
# Projects Displayed

1. ReadMeGenie

2. VroomVroom-VehicleVault

3. WorkWarden

License

This project is open-source and available under the MIT License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
