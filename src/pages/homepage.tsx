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
		internEmail: "François.voltaire@candide.com"
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
						<input type="text" value={this.state.internshipManagerFirstName} />
						<div></div>
						<label htmlFor="">Nom  : </label>
						<input type="text" value={this.state.internshipManagerLastName} />
						<div></div>
						<label htmlFor="">E-mail  : </label>
						<input type="text" value={this.state.internshipManagerEmail} />
					</form>
				<Box>
					<h3>Stagiaire</h3>
				</Box>
					{/* Intern information field */}
					<form action="">
						<label htmlFor="">Prénom : </label>
						<input type="text" value={this.state.internFirstName} />
						<div></div>
						<label htmlFor="">Nom  : </label>
						<input type="text" value={this.state.internLastName} />
						<div></div>
						<label htmlFor="">E-mail  : </label>
						<input type="text" value={this.state.internEmail} />
					</form>
					
					
					le/la/les responsable(s) :
					Nom :
					Prénom :
					e-mail :
	
					stagiaire : 
					Nom :
					Prénom :
					e-mail :
					unité :
	
					---
	
					Déroulement du stage : 
					Décrivez brièvement ce que vous avez appris :
	
					Ce qui c'est bien passé ?
					Ce qui c'est mal passé ?
					Ce que je modifierais ?
	
					A ton avis, quelles sont les qualités nécessaires à l’exercice de cette profession ?
					As-tu l’impression de posséder ces qualités ?
	
					ce que le stage t'a fait comprendre sur 
					[le metier en question] : 
					[toi] :
	
					----
	
					Conclusion :
					Le métier correspond-il à l’idée que tu t’en faisais ?
					si non, quelle sont les différences entre ton idée et ce que tu as réalisé ?
					Est-ce que ce stage ta permis de mieux comprendre cet élément du métier ?
					Si non, que faudrait il rajouter au stage pour avoir une meilleur vue d'ensemble ?
					Qu'est-ce que ce stage t'apporte quelque chose dans ta branche de metier ?
	
					---
	
					Compétences opérationelles selon dossier de formation : https://ponsfrilus.github.io/dossier-formation/
	
	
					Commentaire additionnel :
	</div>
			</Container>
		);
	}
}
