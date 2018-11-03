import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-grow: 0;
    flex-wrap: wrap;
    margin-bottom: 15px;
    margin-top: -5px;
    font-size: 0.85rem;

    > li {
        list-style: none;
        padding: 4px 8px;
        margin-top: 5px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.greyLighter};
        
        &:not(:last-child) {
            margin-right: 5px;
        }

        &:after {
            content: "";
            
        }
    }
`