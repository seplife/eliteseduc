import Dexie, { type EntityTable } from 'dexie';
import type { DossierEleve } from '../types/dossier';

export class ElitesEducaDatabase extends Dexie {
  dossiers!: EntityTable<DossierEleve, 'id'>;

  constructor() {
    super('ElitesEducaDB');
    this.version(1).stores({
      dossiers: '++id, ref, nom, niveau, statut, recuLe, pereContact, mereContact, tutContact',
    });
  }
}

export const db = new ElitesEducaDatabase();

// Données initiales réalistes pour la démonstration
export const INITIAL_DEMO_DOSSIERS: Omit<DossierEleve, 'id'>[] = [
  {
    ref: 'ED-2026-0417',
    recuLe: '2026-09-10T09:30:00.000Z',
    statut: 'recu',
    nom: 'KOUAME Koffi Jean-Eudes',
    niveau: '3ème',
    classe: '3ème 2',
    sexe: 'M',
    naissDate: '2011-04-14',
    naissLieu: 'Divo',
    nationalite: 'Ivoirienne',
    quartier: 'Bada',
    chezQui: 'Père',
    pereNom: 'KOUAME N’Dri Michel',
    pereProf: 'Enseignant',
    pereDom: 'Divo Bada',
    pereContact: '07 07 88 12 34',
    mereNom: 'KOUADIO Aya Thérèse',
    mereProf: 'Commerçante',
    mereDom: 'Divo Bada',
    mereContact: '05 05 44 22 11',
    parentsEnsemble: 'oui',
    nbFreres: 3,
    occupeScolarite: 'Père',
    orphelinPere: false,
    orphelinMere: false,
    tutNom: 'KOUAME N’Dri Michel',
    tutProf: 'Enseignant',
    tutQuartier: 'Bada',
    tutLien: 'Père',
    tutContact: '07 07 88 12 34',
    probSante: 'non',
    santePathologies: [],
    etabOrigine: 'Collège Moderne Divo',
    classeSuivie: '4ème',
    mga: '13.45',
    docsFournis: [
      'Acte de naissance',
      'Livret scolaire',
      'Chemise cartonnée',
      'Reçu inscription',
    ],
    notesAdmin: 'Dossier pré-enregistré en ligne. En attente de la CNI du parent.',
  },
  {
    ref: 'ED-2026-1042',
    recuLe: '2026-09-12T14:15:00.000Z',
    statut: 'verification',
    nom: 'BAMBA Fatou Estelle',
    niveau: '2nde',
    classe: '2nde C1',
    sexe: 'F',
    naissDate: '2010-09-22',
    naissLieu: 'Gagnoa',
    nationalite: 'Ivoirienne',
    quartier: 'Konankro',
    chezQui: 'Tuteur',
    pereNom: 'BAMBA Souleymane',
    pereProf: 'Planteur',
    pereDom: 'Gagnoa',
    pereContact: '01 02 33 44 55',
    mereNom: 'DIOMANDE Mariam',
    mereProf: 'Ménagère',
    mereDom: 'Gagnoa',
    mereContact: '07 48 55 66 77',
    parentsEnsemble: 'oui',
    nbFreres: 4,
    occupeScolarite: 'Autre',
    occupeScolaritePrecision: 'Tuteur à Divo',
    orphelinPere: false,
    orphelinMere: false,
    tutNom: 'TRAORE Bakary',
    tutProf: 'Fonctionnaire DRENA Divo',
    tutQuartier: 'Konankro',
    tutLien: 'Oncle maternel',
    tutContact: '07 59 11 22 33',
    probSante: 'oui',
    santePathologies: ['Yeux', 'Asthme'],
    santeAutre: 'Port de verres correcteurs obligatoires en classe',
    etabOrigine: 'Lycée Moderne 1 Divo',
    classeSuivie: '3ème',
    mga: '14.80',
    docsFournis: [
      'Acte de naissance',
      'Livret scolaire',
      'Chemise cartonnée',
      'CNI parent',
      'Reçu inscription',
      'Bulletin',
      'Macaron',
      'Carnet',
    ],
    notesAdmin: 'Pièces physiques déposées. Vérification de l’authentification du bulletin en cours.',
  },
  {
    ref: 'ED-2026-1893',
    recuLe: '2026-09-08T11:00:00.000Z',
    statut: 'valide',
    nom: 'KONAN Yao Christian',
    niveau: 'Terminale',
    classe: 'Tle D1',
    sexe: 'M',
    naissDate: '2008-01-05',
    naissLieu: 'Divo',
    nationalite: 'Ivoirienne',
    quartier: 'Libreville',
    chezQui: 'Mère',
    pereNom: 'KONAN Kouadio',
    pereProf: 'Décédé',
    pereDom: 'Divo',
    mereNom: 'AMANI Akissi Jeanne',
    mereProf: 'Infirmière',
    mereDom: 'Divo Libreville',
    mereContact: '07 08 99 00 11',
    parentsEnsemble: 'non',
    nbFreres: 2,
    occupeScolarite: 'Mère',
    orphelinPere: true,
    orphelinMere: false,
    tutNom: 'AMANI Akissi Jeanne',
    tutProf: 'Infirmière',
    tutQuartier: 'Libreville',
    tutLien: 'Mère',
    tutContact: '07 08 99 00 11',
    probSante: 'non',
    santePathologies: [],
    etabOrigine: 'Cours Secondaire Elites Divo',
    classeSuivie: '1ère D',
    mga: '15.20',
    docsFournis: [
      'Acte de naissance',
      'Livret scolaire',
      'Chemise cartonnée',
      'CNI parent',
      'Reçu inscription',
      'Bulletin',
      'Macaron',
      'Carnet',
      'T-shirt',
      'Carte acces',
    ],
    notesAdmin: 'Dossier complet et validé. Carte scolaire et macaron délivrés.',
  },
  {
    ref: 'ED-2026-2401',
    recuLe: '2026-09-14T16:40:00.000Z',
    statut: 'rejete',
    nom: 'TOURE Aminata Grace',
    niveau: '6ème',
    classe: '6ème 3',
    sexe: 'F',
    naissDate: '2014-11-18',
    naissLieu: 'Abidjan',
    nationalite: 'Ivoirienne',
    quartier: 'Plateau Divo',
    chezQui: 'Tuteur',
    pereNom: 'TOURE Brahima',
    pereProf: 'Commerçant',
    pereDom: 'Abidjan Adjamé',
    pereContact: '01 02 03 04 05',
    mereNom: 'KONE Fanta',
    mereProf: 'Couturière',
    mereDom: 'Abidjan',
    mereContact: '05 06 07 08 09',
    parentsEnsemble: 'oui',
    nbFreres: 5,
    occupeScolarite: 'Père',
    orphelinPere: false,
    orphelinMere: false,
    tutNom: 'KOUASSI Yao',
    tutProf: 'Mécanicien',
    tutQuartier: 'Plateau',
    tutLien: 'Connaissance famille',
    tutContact: '07 12 34 56 78',
    probSante: 'non',
    santePathologies: [],
    etabOrigine: 'EPP Plateau Divo',
    classeSuivie: 'CM2',
    mga: '132.5 pts CEPE',
    docsFournis: [
      'Acte de naissance',
    ],
    notesAdmin: 'Dossier incomplet : Manque la CNI du parent, le relevé de notes CEPE original et le livret scolaire.',
  },
];

// Initialise la BDD avec les dossiers démos si elle est vide
export async function initDatabase(): Promise<void> {
  const count = await db.dossiers.count();
  if (count === 0) {
    await db.dossiers.bulkAdd(INITIAL_DEMO_DOSSIERS);
    console.log('Base de données initialisée avec les dossiers démo.');
  }
}

// Générateur de référence unique au format ED-2026-XXXX
export function generateReference(): string {
  const randNum = Math.floor(1000 + Math.random() * 9000);
  return `ED-2026-${randNum}`;
}

// Recherche par référence ou nom
export async function findDossier(query: string): Promise<DossierEleve | null> {
  const q = query.trim().toUpperCase();
  // Recherche d'abord par référence exacte
  const byRef = await db.dossiers.where('ref').equalsIgnoreCase(q).first();
  if (byRef) return byRef;

  // Recherche par nom
  const all = await db.dossiers.toArray();
  const byNom = all.find(d => d.nom.toUpperCase().includes(q));
  return byNom || null;
}

// Réinitialisation avec données d'exemple
export async function resetDatabaseWithSamples(): Promise<void> {
  await db.dossiers.clear();
  await db.dossiers.bulkAdd(INITIAL_DEMO_DOSSIERS);
}
