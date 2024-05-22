import styles from "./AboutTheTeam.module.css";

const AboutTeam = () => {
  return (
    <div className={styles.wrapper}>
      <h1>About the Team</h1>
      
    <div className="container">
      <div className="image-container">
        <img src="/public/images/3wolvesTeam.jpg" alt="wolfTeam" />
      </div>
      <div className="text-container">
        <div className="text-column">
          <p>
            Meet the extraordinary and ferocious minds behind the Ai , the driving force propelling us into the future. Our team is comprised of the industry's finest talents, handpicked from across the globe for their unparalleled expertise and unwavering commitment to excellence.
          </p>
          <p>
            While we can't reveal their identities (because they're just that good), rest assured, they are the best of the best.
          </p>
          <p>
            With decades of combined experience in AI, machine learning, software development, and user experience design, our team is dedicated to pushing the boundaries of innovation and revolutionizing the way we interact with technology.
          </p>
        </div>
        <div className="text-column">
          <p>
            Each member brings a unique set of skills and perspectives to the table, contributing to the dynamic synergy that fuels our success. From visionary leaders to brilliant engineers, our team is united by a shared passion for harnessing the power of AI to shape a brighter future for all.
          </p>
          <p>
            Though their faces remain shrouded in mystery, their contributions speak volumes. Together, we are [Fake Company Name], and we're just getting started.
          </p>
          <p>
           
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};


export default AboutTeam;