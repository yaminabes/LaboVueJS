class Virus {

  constructor(_id, name, code) {
    this._id = _id;
    this.name = name;
    this.code = code;
    // valeur par défaut
    this.temperature = [];
    this.virulence = []; // pour chaque organe, niveau de 0 à 10
    this.mortalite = 0; // de 0 à 100%
    this.updateCaracs();
  }

  clone() {
    return new Virus(this._id, this.name, this.code);
  }

  updateCaracs() {
    if (this.temperature.length != 0) {
      this.temperature.splice(0,this.temperature.length);
    }
    if (this.virulence.length != 0) {
      this.virulence.splice(0,this.virulence.length);
    }

    this.updateTemperature()
    this.virulenceCoeur();
    this.virulencePoumon();
    this.virulenceRein();
    this.virulenceCerveau();
    this.updateMortalite();
  }

  updateTemperature() {
    let tMin = -10;
    let tMax = 55;
    /* regle de calcul :
     - tMin = max (-2*nombre_de_A, -50)
     - tMax = max( 3*nombre_de_D, 100)
     */

    // A COMPLETER
    this.temperature = [ tMin, tMax];
  }

  virulenceCoeur() {
    let level = 0;
    /* regle de calcul :
    - trouver toutes les séquences AB et leur emplacement
    - si zero ou une seule existe virulence = 0, sinon
    - faire la moyenne D de la distance entre ces séquences.
    - viurlence = min(10, nb_seq)*(1/sqrt(D-1))
    exemple 1 : ABABABAB
    - 3 sequences, dist entre sequence tooujours égale à 2 donc D=2
    - virulence = min(3,10)*(1/sqrt(2-1)) = 3
    exemple 2 : ABCABCCABCCCAB
    - 4 sequences, D = (3+4+5)/3 = 4
    - virulence = 4*(1/sqrt(4-1)) = 2.3

    */

    // A COMPLETER

    this.virulence.push({organe:'coeur', niveau:level});
  }

  virulencePoumon() {
    let level = 0;
    /* regle de calcul :
    - trouver la plus longue répétition de BAD
    - s'il n'y a pas de telle répétition, alors virulence = 0, sinon
    - trouver la plus longue répétition de C
    - M = 1.5^(nb_repet_BAD) - (nb_repet_C/2)
    - viurlence = min(10, M, 0)
    exemple : BADBADCCCBADC
    - BAD répété 2 fois au max. et C répété 3 fois au max.
    - M = 1.5^2 - 3/2 = 0.75
    - virulence  = min(10,M,0) = 0.75
    */

    // A COMPLETER

    this.virulence.push({organe:'poumon', niveau:level});
  }

  virulenceRein() {
    let level = 0;
    /* regle de calcul :
    - trouver les plus longues répétitions de B et de D, faisant au moins 2 de long
    - s'il n'y a pas de telles répétitions, alors virulence = 0
    - M = moyenne de leur longueur -1
    - viurlence = min(10, M)
    exemple : ABBCDDDDABBB
    - B, plus longue séquence de 3 et D, 4
    - M =  ((3+4)/2) -1 = 2.5
    - virulence  = min(10,M) = 2.5
    */

    // A COMPLETER

    this.virulence.push({organe:'rein', niveau:level});
  }
  virulenceCerveau() {
    let level = 0;
    /* regle de calcul :
    - trouver la plus longue répétition de CA
    - s'il n'y a pas de telle répétition, alors virulence = 0, sinon
    - si nb_repet_CA est pair alors M = nb_repet_CA, sinon M = nb_repet_CA/2
    - viurlence = min(10, M)
    exemple : BDCACACAABDCA
    - CA répété 3 fois au max.
    - M = 3/2
    - virulence  = min(10,M) = 1.5
    */
    const rexp1 = RegExp('(CA)+','g');
    let maxCA = 0;
    let res;
    while ( (res = rexp1.exec(this.code)) !== null) {
      if(res[0].length > maxCA) {
        maxCA = res[0].length;
      }
    }
    maxCA = maxCA/2; // pour avoir le nb repet
    if (maxCA%2 == 1) maxCA = maxCA/2; // cas impair

    level = maxCA>10?10:maxCA;

    this.virulence.push({organe:'cerveau', niveau:level});
  }

  updateMortalite() {

    let m = 0;
    /* regle de calcul :
    - M = 2 * somme des 4 valeurs de virulence
    - si virPoumon>=6 ET virRein>=6, m += 10
    - sinon virPoumon>=3 ET virRein>=3, m += 5
    - si virCoeur>=6 ET virCerveau>=6, m += 10
    - sinon si virCoeur>=3 ET virCerveau>=3, m += 5
    mortalite = m
    */

    // A COMPLETER

    this.mortalite = m;
  }

  toString() {
    return this.name+" "+this.code+" : "+this.mortalite;
  }

}

var viruses = [];

viruses.push(new Virus(1,"adeno","ABABABABABAB"));
viruses.push(new Virus(2,"covid","ABADBADCCCBADCB"));
viruses.push(new Virus(3,"staphy","ABBCDDDDCBBB"));
viruses.push(new Virus(4,"prillon","ABCACACABCAB"));

export { Virus, viruses };
