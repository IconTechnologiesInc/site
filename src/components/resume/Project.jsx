import React from 'react'
import styled from 'styled-components'
import { Column, Columns } from 'bloomer'
import { Text, Title } from '../Text'
import { IconStyled } from './'

export default styled(props => (
    <div className={props.className}>
        <Title size="small" color="grey">{props.name}</Title>
        <Columns>
            <Column className="is-1">
                <IconStyled className="fas fa-link"/>
            </Column>
            <Column>
                <Text size="smaller" color="grey">{props.url}</Text>
            </Column>
        </Columns>
        <p>{props.description}</p>
    </div>
))`
    &&&{
        margin-bottom: 15px;

        &:not(:last-child):after {
            display: block;
            content: "";
            height: 2px;
            width: 80%;
            margin: 0;
            padding-top: 15px;
            border-bottom: 1px dashed ${({ theme }) => theme.colors.greyLighter};
        }

        > .columns {
            margin-bottom: 0;
        }

        @media print {
            .columns {
                word-break: break-all;

                .column {
                    padding-bottom: 2px;
                }
            }

            ${Text} {
                font-size: 10pt;
            }
        }
    }
`