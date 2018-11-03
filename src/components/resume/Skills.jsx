import React from 'react'
import styled from 'styled-components'
import { Icon } from 'bloomer'


export const Skills = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 15px;
`

export const Skill = styled(({ children, className, level }) => (
    <div className={className}>
        <span>{children}</span>
        {Array.from({ length: level }).map((_, i) => <Icon key={i} className="fas fa-star"></Icon>)}        
    </div>
))`
    display: flex;

    span:nth-child(1) {
        margin-right: auto;
    }

    span:not(:first-child) {
        color: ${props => props.theme.colors.primary};
    }

    @media print {
        .fas {
            height: 1rem;
            width: 1rem;
        }
    }
`