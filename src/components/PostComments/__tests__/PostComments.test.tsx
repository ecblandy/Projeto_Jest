import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });


    it("Deve renderizar um comentario", () => {
        const {debug} = render(<PostComment/>)
        
        fireEvent.change(screen.getByTestId('comment-field'), {
            target: {
                value: 'Estudar Jest'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByText('Estudar Jest')).toBeInTheDocument()


        
        fireEvent.change(screen.getByTestId('comment-field'), {
        target: {
            value: 'Estudar JavaScript'
        }
        })

         fireEvent.click(screen.getByTestId('btn-comment'))
         expect(screen.getByText('Estudar JavaScript')).toBeInTheDocument()

        debug()
    })


});