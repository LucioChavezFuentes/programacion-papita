import React from 'react';
import firebase from './firebase';



const FirebaseContext = React.createContext<firebase | null>(null);

export default FirebaseContext;