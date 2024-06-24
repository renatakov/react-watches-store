import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >

            </Modal.Header>
            <Modal.Body style={{display: 'flex', justifyContent: 'center'}}>
                <iframe poster width="560" height="315" src="https://www.youtube.com/embed/s-x_HVCwKgI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyCenteredModal
