import styles from "./AboutTheTeam.module.css";
import { Link } from "react-router-dom";


function AboutTheTeam() {
  return <div className={styles.wrapper}>
      <h1>About the Team</h1>
      
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/images/3wolvesTeam.jpg" alt="wolfTeam" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textColumn}>
          <p>
            Meet the extraordinary and ferocious minds behind the Ai Cooking Assistant:<span><Link to='https://github.com/ChloeSAPage'> Chloe Page</Link>,<Link to='https://github.com/kamila-wilczynska'> Kamila wilczynska</Link>, and <Link to='https://github.com/HelderBalbino'> Helder Balbino</Link>.</span> <br />They are the driving force propelling us into the future of Ai Cooking, Sports, Cocktails and Bird watching. Our team is comprised of the industry's finest talents, handpicked from across the globe for their unparalleled expertise and unwavering commitment to excellence.
          </p>
          <p>
          Our developers are a dynamic and talented group of professionals dedicated to creating high-quality web solutions. Each member brings a unique set of skills and expertise, ranging from front-end development with JavaScript and React to back-end development using Node.js. Our diverse backgrounds and experiences allow us to approach projects with a well-rounded perspective, ensuring that we deliver robust and user-friendly applications tailored to meet our clients' specific needs.

          </p>
          We pride ourselves on our collaborative work environment, where communication and teamwork are paramount. Regular team meetings, code reviews, and pair programming sessions foster a culture of continuous learning and improvement. This collaborative approach not only helps us to tackle complex problems more efficiently but also ensures that our code is clean, maintainable, and scalable.
          <p>
            
          </p>
        </div>
        <div className={styles.textColumn}>
          <p>
          Our commitment to best practices and staying up-to-date with the latest industry trends allows us to implement cutting-edge technologies and innovative solutions.
          Customer satisfaction is at the core of our mission. We work closely with our clients throughout the entire development process, from initial concept and planning to deployment and ongoing support. By maintaining open lines of communication and providing regular updates, we ensure that our clients are always informed and involved in the progress of their projects. Our goal is to build lasting relationships based on trust, transparency, and exceptional service.
          </p>
          <p>
          In addition to our technical skills, our team is adept at project management and agile methodologies. We use tools like Trello to track progress, manage tasks, and ensure timely delivery of projects. Our agile approach allows us to be flexible and responsive to changing requirements, delivering high-quality products that exceed our clients' expectations. As a team, we are passionate about technology and dedicated to creating web applications that make a difference.
          </p>
          </div>
      </div>
    </div>
    </div>
}


export default AboutTheTeam;