import React from 'react'
import styled from '@emotion/styled';
import './Card.css';


const Container = styled.div`
    width:100vw ;
    height:100vh;
    position: fixed ;   
    z-index: 10;
    overflow: auto;
    display: flex;
    justify-content: center;
    padding: 2rem;
    color: white;
`;
const ModalContainer=styled.div`
    /*glass*/

    gap: 20px;
    border-radius: 35px;
    backdrop-filter: blur(14px);
    background-color: rgba(112,255,219, 0.308);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;

    /*end glass*/
    overflow: auto;
    padding: 4rem;
    width:90vw ;
    height:90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Modal = ({setModal,infoModal}) => {

    const closeModal=()=>{
        setModal(false);
    }

    return ( 
        <Container>
            <ModalContainer>
                <h2>
                    {infoModal.title}
                </h2>
                <p>{infoModal.content}</p>
                <buton class="cta" onClick={closeModal}>
                    <span>Cerrar</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </buton>
            </ModalContainer>
        </Container>
     );
}
 
export default Modal;