
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


export function App() {

  Modal.setAppElement('#root');

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    function handleOpenNewModalTransaction(){
      setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewModalTransaction(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
     <Header onOpenNewTRansactionModal={handleOpenNewModalTransaction}/>
     
     <Dashboard/>

     <NewTransactionModal
       isOpen = {isNewTransactionModalOpen}
       onRequestClose={ handleCloseNewModalTransaction}
     />

     <GlobalStyle/>
    </TransactionsProvider>
  );
}