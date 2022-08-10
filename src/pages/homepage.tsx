import { Box, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ReactNode } from 'react';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
`

export default class HomePage extends React.Component {

  state = {
    internshipName: "",
    internshipService: "",
    beginDate: null,
    endDate: null,

    internshipManagerFirstName: "",
    internshipManagerLastName: "",
    internshipManagerEmail: "",

    internFirstName: "",
    internLastName: "",
    internEmail: "",
    internUnit: "",

    processknowledgeLearned: "",
    processWhatWentRight: "",
    processWhatWentWrong: "",
    processWhatNeedChange: "",
    processNecessaryProfSkills: "",
    processSkillQuestions: "",
    processJobUnderstanding: "",
    processIntrospection: "",

    prejudgeYes: "",
    prejudgeNo: "",
  }

  handleChangeBeginDate = (newValue: Date | null) => {
    this.setState({ beginDate: newValue });
  }

  handleChangeEndDate = (newValue: Date | null) => {
    this.setState({ endDate: newValue });
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
            <TextField id={this.state.internshipName} label="Nom du stage" variant="outlined" />
            <TextField id={this.state.internshipService} label="Nom du service" variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date de début"
                inputFormat="dd/MM/yyyy"
                value={this.state.beginDate}
                onChange={this.handleChangeBeginDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date de fin"
                inputFormat="dd/MM/yyyy"
                value={this.state.endDate}
                onChange={this.handleChangeEndDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Box>
              <h3>Responsable de stage</h3>
            </Box>
            {/* Manager information field */}
            <TextField id={this.state.internshipManagerFirstName} label="Prénom" variant="outlined" />
            <TextField id={this.state.internshipManagerLastName} label="Nom" variant="outlined" />
            <TextField id={this.state.internshipManagerEmail} label="E-mail" variant="outlined" />
            <Box>
              <h3>Stagiaire</h3>
            </Box>
            {/* Intern information field */}
            <TextField id={this.state.internFirstName} label="Prénom" variant="outlined" />
            <TextField id={this.state.internLastName} label="Nom" variant="outlined" />
            <TextField id={this.state.internEmail} label="E-mail" variant="outlined" />
            <TextField id={this.state.internUnit} label="Unité" variant="outlined" />
            <Box>
              <h3>Déroulement du stage</h3>
            </Box>
            {/* Process of the course */}
            <TextField
              id={this.state.processknowledgeLearned}
              label="Décrivez brièvement ce que vous avez appris :"
              multiline
            />
            <TextField
              id={this.state.processWhatWentRight}
              label="Ce qui c'est bien passé ?"
              multiline
            />
            <TextField
              id={this.state.processWhatWentWrong}
              label="Ce qui c'est mal passé ?"
              multiline
            />
            <TextField
              id={this.state.processWhatNeedChange}
              label="Ce que je modifierais ?"
              multiline
            />
            <TextField
              id={this.state.processNecessaryProfSkills}
              label="A ton avis, quelles sont les qualités nécessaires à l’exercice de cette profession ?"
              multiline
            />
            <TextField
              id={this.state.processWhatNeedChange}
              label="Ce que je modifierais ?"
              multiline
            />
            <TextField
              id={this.state.processSkillQuestions}
              label="As-tu l’impression de posséder ces qualités ?"
              multiline
            />
            <Box>
              <h4>Ce que le stage t'a fait comprendre sur :</h4>
            </Box>
            <TextField
              id={this.state.processJobUnderstanding}
              label="Le metier en question"
              multiline
            />
            <TextField
              id={this.state.processIntrospection}
              label="Sur toi"
              multiline
            />
            <Box>
              <h3>Conclusion</h3>
            </Box>
            {/* Conclusion */}
            <label htmlFor="">Le métier correspond-il à l’idée que tu t’en faisais ?</label>
            <br />
            <input type="radio" defaultValue={this.state.prejudgeYes} />
            <label>Oui</label>
            <br />
            <input type="radio" defaultValue={this.state.prejudgeNo} />
            <label>Non</label>
            <br />
            <textarea name="message"></textarea>
            <br />
            <label htmlFor="">si non, quelle sont les différences entre ton idée et ce que tu as réalisé ?</label>
            <br />
            <textarea name="message"></textarea><br />
            <label htmlFor="">Est-ce que ce stage ta permis de mieux comprendre cet élément du métier ?</label>
            <br />
            <textarea name="message"></textarea>
            <br />
            <label htmlFor="">Si non, que faudrait il rajouter au stage pour avoir une meilleur vue d'ensemble ?</label>
            <br />
            <textarea name="message"></textarea>
            <br />
            <label htmlFor="">Qu'est-ce que ce stage t'apporte quelque chose dans ta branche de metier ?</label>
            <br />
            <textarea name="message"></textarea>
            <br />
            <label htmlFor="">
              Compétences opérationelles selon le 
                <a href="https://ponsfrilus.github.io/dossier-formation/">
                  dossier de formation
                </a>
                <br />
              <textarea name="message"></textarea>
              <br />
            </label>
            <br />
            <label htmlFor="">Commentaire additionnel :</label>
            <br />
            <textarea name="message"></textarea>
            <br />
          </form>
        </div>
      </Container>
    );
  }
}
