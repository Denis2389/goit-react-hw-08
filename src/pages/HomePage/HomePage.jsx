import css from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle";

export default function HomePage() {
	return (
		<>
			<DocumentTitle>Home</DocumentTitle>

			<div className={css.container}>
				<h1 className={css.title}>
					<div>
						Welcome to Contacts Book
					</div>{" "}
				</h1>
			</div>
		</>
	);
}
