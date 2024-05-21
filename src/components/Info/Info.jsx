import styles from "./Info.module.css";

export default function Info({ title, description }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
