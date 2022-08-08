import { Box } from '@mui/material';
import { ReactNode } from 'react';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
`

export default class HomePage extends React.Component {

	state = {
		internshipName: "ServiceDesk"
	}
	render(): ReactNode {
		return (
			<Container>
				<Box>
					<h1>Rapport de stage</h1>
				</Box>
				<div>
					<form action="">
						<label htmlFor="">Nom du stage : </label>
						<input type="text" value={this.state.internshipName} />
						
					</form>
						Service : 
					
					
	
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
