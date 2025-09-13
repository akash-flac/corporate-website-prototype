# Markle Tech Website
This is a prototype/mock-up for a corporate website I created during my internship in early 2025. 

# Folder Structure and Architecture
(React project using Vite)

- node_modules(node package dependencies of the project)
- public(stores easy to access data, i.e. logo and hero section video)
- src(core source code for the app)
	- assets(contains markle-tech portfolio ppt/pdf)
	- components(contains all the components used in the project)
		- lib(contains utils file for shadcn ui components)
		- ui(contains some generic ui components)
		- ...other component files in .jsx format
	- data(contains requisite object for each section of the website, **USE this folder to change the content of the website**. apart from this, sometimes the object data of a component/page present in that component/page file itself)
		- about
		- components
		- home
		- industries
		- services
		- solutions
		- callsToAction file(data for the two options(demo and consultation) below the services dropdown in navbar)
	- images(contains all the images used anywhere in the website(except the logos which are stored in public folder))
	- pages(contains the code for all the pages in the website. **for home page**, there is a separate page and )
	- utils(dummy folder at the moment, doesn't contain anything of value)
	- other files are default react files required to run the project
		- `App.jsx`: contains all the routes for all the pages
- other files are default React files 

# Flow and other stuff
- Home page: is a collection of multiple different components just rendered into the`Home.jsx` file
	- Hero section component = Banner  + Navbar + Code for Hero Section itself. It is a dynamic component using bgImage, heading, content, bgVideo as props, where we can just provide the bgImage, heading, and content for the hero section using props, and the hero includes the default banner and navbar. bgVideo is conditionally rendered.
	- Banner component contains contact info, and social media links(using `IconButton.jsx` component and props passed to it)
	- Navbar: conditionally rendered based on small screens and large screens. contains the `bgBlack` prop which is used to make navbar background black in case of some components(e.g. cost-calculator in Pricing section)
	- Tools Section was made using `swiper` library
	- **View More** buttons added for multiple components, as well as all services and solutions are clickable cards/buttons leading to their own page.
- About Section: contains a separate page for each part of the section
	- About Us: used `react-countup` library for *why choose markle?* component.
	- Client Reviews: Same data as that of the customer reviews on the first page rendered in a Testimonial Card component format and stars for each reviewer(can be changed using the relevant object data - clientReviews.js)
	- Careers: career object data is stored in this file itself instead of the data folder
	- FAQs: contains all FAQs, divided into different sections, all data in faqs.js
	- Become Our Agent: contains a form for which APIs haven't been built
- Services Section: 
	- `ServicesCommon.jsx` in components folder acts as the common component for any services page, where this component is rendered for each services page based on the data provided(`services.js`). 
	- See All Services: this page contains a list of all the services provided
- Industries Section: 
	- `IndustriesCommon.jsx` does the same thing as `ServicesCommon.jsx` for the Industries section. 
	- View More Industries: Industries that are not mentioned on the dropdown section in the navbar are mentioned here. All the cards on this page are clickable and lead to the relevant page.
- Solutions Section: 
	- `SolutionsCommon.jsx` does the same thing as above for all solutions. 
- Pricing Section: determines project cost based on requirements
	- each image with the title is clickable and is an option among many to choose from for project cost calculation. 
	- after the second page, a 7-step CostCalculator opens up. & different pages have been created for each step.
		- APIs for this haven't been built.
- ContactUs: contact form for clients/customers
	- API for this has been built, but no admin dashboard to display the data
- Footer:
	- All the links are clickable and lead to relevant page
	- Terms, Privacy, Refund, Disclaimer: All pages have been added with relevant content from the `markletech.com` website
- Error 404 NotFound page added for unavailable routes
- Everything is well-responsive
- The animations in the website have been added using `motion` library.
- Scroll-to-top functionality added to each page on the website
- Contacts and email are clickable and lead to contacts app in phone, or email app in all devices.
