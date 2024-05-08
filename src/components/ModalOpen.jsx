import React from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import useGlobalState from '../store/useGlobalState';


function ModalOpen({input, setInput}) {
    const {stackArray,setStackArray} = useGlobalState();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const handleInputChange = (e) => {
        e.preventDefault();
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleCreate = async (e) => {
        e.preventDefault();
        await setStackArray(input);
    }
    return (
        <>
            <Button onClick={onOpen} colorScheme='green' color={'white'}>+ New Stack</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Desc</FormLabel>
                            <Input ref={initialRef} placeholder='Stack name' name="stackName" value={input.stackName} onChange={handleInputChange} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Input placeholder='Description about stack' name="stackDesc" value={input.stackDesc} onChange={handleInputChange} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3} >Cancel</Button>
                        <Button onClick={handleCreate} colorScheme='green'>
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalOpen