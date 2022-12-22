## Procédure pour ajouter un nouveau rapport de stage

### JSON data

### SVG

* Zoomer le rapport de stage à 160% et en faire un screenshot à coller dans Inkscape. Reformatter la page à la taille du screen. Sauver le fichier.
* Répéter l'opération pour la deuxième page.
* Remplacer chaque champs par `formData.XXX` ou le `XXX` est le nom de l'entrée dans le JSON
* Aller sur https://react-svgr.com/playground/
* Copier la source du SVG InkScape puis la mettre dans un fichier TSX (e.g responsable.tsx)
* ```
{
  "semi": false,
  "singleQuote": true
}
```
* Formatter le fichier selon un autre exemple (import, etc.)
* Supprimer  ```
import * as React from "react"

const SvgComponent = (props) => (
```
* Supprimer `{...props}`
* Supprimer toutes les occurences de `writingMode` et `InkscapeFontSpecification`
* Fixer (avec VSCodium) toutes les erreurs d'ESLint (par exemple appostrophe / guillemets double)
* Changer toutes les `{'formData.XXX'}`  en `{formData.XXX}`
