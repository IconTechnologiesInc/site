import React from 'react'
import styled, { css } from 'styled-components'

export default styled(props => (
    <ul className={props.className}>
        <li>
            <a target="_blank" href="https://www.facebook.com/icon.technologies.inc/">
                <i className="fab fa-facebook"></i>
            </a>
        </li>
        <li>
            <a target="_blank" href="https://www.linkedin.com/company/icon-technologies-inc/">
                <i className="fab fa-linkedin"></i>
            </a>                                
        </li>
        <li>
            <a target="_blank" href="https://github.com/IconTechnologiesInc">
                <i className="fab fa-github"></i>
            </a>                                
        </li>
    </ul>
))`${({ theme }) => css`
    &&& {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;

        > li {
            
            

            a {
                color: ${theme.colors.primary};
                font-size: ${theme.fonts.size.medium};

                &:hover {
                    color: ${theme.colors.secondary};
                }
            }
        }
        
    }
`}`