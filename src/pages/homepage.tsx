import { Box } from '@mui/material';
import { ReactNode } from 'react';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
`

export default class HomePage extends React.Component {

	state = {
		internshipName: "Ex : ServiceDesk",
		internshipService: "Ex : 1234",

		internshipManagerFirstName: "Ex : Charles",
		internshipManagerLastName: "Ex : Baudelaire",
		internshipManagerEmail: "charles.baudelaire@fleur.com",

		internFirstName: "Ex : François-Marie",
		internLastName: "Ex : Voltaire",
		internEmail: "François.voltaire@candide.com",
		internUnit: "philosophie",
	}
	render(): ReactNode {
		return (
			<Container>
				<Box>
					<h1>Rapport de stage</h1>
				</Box>
				<div>
				<Box>
					<h3>Informations général sur le stage</h3>
				</Box>
					{/* Internship information */}
					<form action="">
						<label htmlFor="">Nom du stage : </label>
						<input type="text" value={this.state.internshipName} />
						<label htmlFor="">Nom du service : </label>
						<input type="text" value={this.state.internshipService} />
					</form>
				<Box>
					<h3>Responsable de stage</h3>
				</Box>
					{/* Manager information field */}
					<form action="">
						<label htmlFor="">Prénom : </label>
						<input type="text" value={this.state.internshipManagerFirstName} /> <br/>
						<label htmlFor="">Nom  : </label>
						<input type="text" value={this.state.internshipManagerLastName} /> <br/>
						<label htmlFor="">E-mail  : </label>
						<input type="text" value={this.state.internshipManagerEmail} />
					
				<Box>
					<h3>Stagiaire</h3>
				</Box>
					{/* Intern information field */}
						<label htmlFor="">Prénom : </label>
						<input type="text" value={this.state.internFirstName} /><br/>
						<label htmlFor="">Nom  : </label>
						<input type="text" value={this.state.internLastName} /><br/>
						<label htmlFor="">E-mail  : </label>
						<input type="text" value={this.state.internEmail} /><br/>
						<label htmlFor="">Unité  : </label>
						<input type="text" value={this.state.internUnit} />
				<Box>
					<h3>Déroulement du stage</h3>
				</Box>
					{/* Process of the course */}
						<label htmlFor="">Décrivez brièvement ce que vous avez appris: </label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">Ce qui c'est bien passé ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">Ce qui c'est mal passé ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">Ce que je modifierais ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">A ton avis, quelles sont les qualités nécessaires à l’exercice de cette profession ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">As-tu l’impression de posséder ces qualités ?</label><br/>
						<textarea name="message"></textarea> <br/>
				<Box>
					<h4>Ce que le stage t'a fait comprendre sur : </h4>
				</Box>
						<label htmlFor="">Le metier en question</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">Sur toi </label><br/>
						<textarea name="message"></textarea> <br/>
				<Box>
					<h3>Conclusion </h3>
				</Box>
					{/* Conclusion */}
						<label htmlFor="">Le métier correspond-il à l’idée que tu t’en faisais ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">si non, quelle sont les différences entre ton idée et ce que tu as réalisé ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">Est-ce que ce stage ta permis de mieux comprendre cet élément du métier ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">Si non, que faudrait il rajouter au stage pour avoir une meilleur vue d'ensemble ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">Qu'est-ce que ce stage t'apporte quelque chose dans ta branche de metier ?</label><br/>
						<textarea name="message"></textarea> <br/>
						<label htmlFor="">Compétences opérationelles selon le  <a href="https://ponsfrilus.github.io/dossier-formation/">dossier de formation</a><br/>
						<textarea name="message"></textarea> <br/></label><br/>
						<label htmlFor="">Commentaire additionnel :</label><br/>
						<textarea name="message"></textarea> <br/>
					</form>				
	</div>
			</Container>
		);
	}
}
