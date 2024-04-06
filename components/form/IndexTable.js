import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';

const IndexTable = ({ dictionary }) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'  >
                <Thead>
                    <Tr>
                        <Th>{dictionary.title11}</Th>
                        <Th>{dictionary.title12}</Th>
                        <Th>{dictionary.title13}</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{dictionary.title2}</Td>
                        <Td>{dictionary.paragraph3}</Td>
                        <Td>{dictionary.paragraph2}</Td>
                    </Tr>
                    <Tr>
                        <Td>{dictionary.title5}</Td>
                        <Td>{dictionary.paragraph9}</Td>
                        <Td>{dictionary.paragraph8}</Td>
                    </Tr>
                    <Tr>
                        <Td>{dictionary.title6}</Td>
                        <Td>{dictionary.paragraph11}</Td>
                        <Td>{dictionary.paragraph10}</Td>
                    </Tr>
                    <Tr>
                        <Td>{dictionary.title3}</Td>
                        <Td>{dictionary.paragraph5}</Td>
                        <Td>{dictionary.paragraph4}</Td>
                    </Tr>
                    <Tr>
                        <Td>{dictionary.title4}</Td>
                        <Td>{dictionary.paragraph7}</Td>
                        <Td>{dictionary.paragraph6}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default IndexTable;