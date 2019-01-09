import React from 'react'
import styled from 'styled-components'
import { Columns, Column } from 'bloomer'
import { Text, Title } from '../../components/Text'
import { DateText, Location } from './'
import Tags from './Tags'

export const Position = styled(props => (
    <div className={props.className}>
        <Columns>
            <Column>
                <Title>{props.title}</Title>
            </Column>
            <Column>
                <Location>{props.location}</Location>                                    
            </Column>
            <Column>
                <DateText>{props.from}</DateText>
            </Column>
        </Columns>
        <Tags>
            {props.skills && props.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </Tags>
        {props.children}
    </div>
))`
    &&& {
        margin-top: 10px;

        > .columns {
            margin-bottom: 0;
            align-items: center;
    
            .column:nth-child(1) {
                margin-right: auto;

                @media print {
                    margin-right: 0;
                    width: 100%;
                    padding-bottom: 0;
                }
            }

            .column {
                flex-basis: auto;
                flex-grow: 0;
            }

            @media print {
                flex-wrap: wrap;

                .column:not(:first-child) {
                    padding-top: 0;
                    
                    .icon {
                        height: 1rem;
                        width: .85rem;
                    }
                }
            }
        }

        @media print {
            // break-inside: avoid;

            ${Title} {
                font-size: 14pt;
            }
        }
    }    
`

export const Experience = styled(props => (
    <div className={props.className}>
        <Text as="p" size="smaller" className="is-uppercase">{props.company}</Text>
        {props.children}
    </div>
))`
    &&& {
        padding-bottom: 30px;
        margin-bottom: 30px;
        position: relative;

        &:not(:last-child):after {
            position: absolute;
            bottom: 0;
            content: "";
            height: 2px;
            width: 80%;
            margin: 0;
            padding-top: 20px;
            border-bottom: 1px dashed ${({ theme }) => theme.colors.greyLighter};
        }

        &:before {
            content: "";
            position: absolute;
            height: calc(100% - 75px);
            width: 2px;
            background-color: ${({ theme }) => theme.colors.whiteTer};
            top: 45px;
            left: 5px;
            z-index: -1;

            @media print {
                top: 47px;
            }
        }

        > .columns {
            margin-bottom: 0;
            align-items: center;
    
            .column {
                flex-basis: auto;
    
                &:nth-child(1) {
                    margin-right: auto;
                }
            }
        }

        ${Text} {
            // break-after: avoid;
            orphans: 3;
        }

        ${Position} {
            position: relative;
            padding-left: 40px;

            &:not(:first-of-type) {
                margin-top: 20px;
            }

            &:after {
                content: "";
                position: absolute;
                top: 25px;
                left: 0;
                height: 12px;
                width: 12px;
                background-color: ${({ theme }) => theme.colors.greyLighter};
                border-radius: 12px;
            }

            @media print {
                padding-left: 30px;
            }
        }
    }
`