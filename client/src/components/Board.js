
import React, { useEffect, useState } from 'react';
import Square from './Square'
import Space from './Space'

export default function Board(props) {
    const [isTwelveMorris, setIsTwelveMorris] = useState(false);

    useEffect(() => {
        const fetchGameConfig = async () => {
            const response = await fetch('/api/config'); // Fetching configuration from the new endpoint
            const data = await response.json();
            if (data.success) {
                setIsTwelveMorris(data.config.boardType === 12); // Update the condition to check boardType
            }
        };

        fetchGameConfig();
    }, []);

  return (
    <div className="board">
        <div>
            <Square 
                value={props.squares[0]} 
                onClick={() => {
                    props.onClick(0);
                }}
            />
            <Space lineType="horizontal"/>
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Square 
                value={props.squares[1]} 
                onClick={() => {
                    props.onClick(1);
                }}    
            />
            <Space lineType="horizontal"/>
            <Space lineType="horizontal" />
            <Space lineType="horizontal"/>
            <Space lineType="horizontal" />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[2]} 
                onClick={() => {
                    props.onClick(2);
                }}    
            />
        </div>
        <div>
            <Space lineType="vertical"/>
            <Space lineType={isTwelveMorris ? 'diagonal-45' : ''} />
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space lineType={isTwelveMorris ? 'diagonal45' : ''} />
            <Space lineType="vertical"/>
        </div>
        <div>
            <Space lineType="vertical" />
            <Space/>
            <Square 
                value={props.squares[3]} 
                onClick={() => {
                    props.onClick(3);
                }}    
            />
            <Space lineType="horizontal" />
            <Space lineType="horizontal"/>
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[4]} 
                onClick={() => {
                    props.onClick(4);
                }}    
            />
            <Space lineType="horizontal" />
            <Space lineType="horizontal"/>
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[5]} 
                onClick={() => {
                    props.onClick(5);
                }}    
            />
            <Space/>
            <Space lineType="vertical" />
        </div>
        <div>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
            <Space lineType={isTwelveMorris ? 'diagonal-45' : ''} />
            <Space/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space/>
            <Space lineType={isTwelveMorris ? 'diagonal45' : ''} />
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
        </div>
        <div>
            <Space lineType="vertical" />
            <Space/>
            <Space lineType="vertical" />
            <Space/>
            <Square 
                value={props.squares[6]} 
                onClick={() => {
                    props.onClick(6);
                }}    
            />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[7]} 
                onClick={() => {
                    props.onClick(7);
                }}    
            />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[8]} 
                onClick={() => {
                    props.onClick(8);
                }}    
            />
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical" />
        </div>
        <div>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
        </div>
        <div>
            <Square 
                value={props.squares[9]} 
                onClick={() => {
                    props.onClick(9);
                }}    
            />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[10]} 
                onClick={() => {
                    props.onClick(10);
                }}    
            />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[11]} 
                onClick={() => {
                    props.onClick(11);
                }}    
            />
            <Space />
            <Space/>
            <Space/>
            <Square 
                value={props.squares[12]} 
                onClick={() => {
                    props.onClick(12);
                }}    
            />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[13]} 
                onClick={() => {
                    props.onClick(13);
                }}    
            />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[14]} 
                onClick={() => {
                    props.onClick(14);
                }}    
            />
        </div>
        <div>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
        </div>
        <div>
            <Space lineType="vertical" />
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Square 
                value={props.squares[15]} 
                onClick={() => {
                    props.onClick(15);
                }}    
            />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[16]} 
                onClick={() => {
                    props.onClick(16);
                }}    
            />
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[17]} 
                onClick={() => {
                    props.onClick(17);
                }}    
            />
            <Space/>
            <Space lineType="vertical" />
            <Space/>
            <Space lineType="vertical" />
        </div>
        <div>
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
            <Space lineType={isTwelveMorris ? 'diagonal45' : ''} />
            <Space/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space/>
            <Space lineType={isTwelveMorris ? 'diagonal-45' : ''} />
            <Space lineType="vertical"/>
            <Space/>
            <Space lineType="vertical"/>
        </div>
        <div>
            <Space lineType="vertical" />
            <Space/>
            <Square 
                value={props.squares[18]} 
                onClick={() => {
                    props.onClick(18);
                }}    
            />
            <Space lineType="horizontal"/>
            <Space lineType="horizontal"/>
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[19]} 
                onClick={() => {
                    props.onClick(19);
                }}    
            />
            <Space lineType="horizontal"/>
            <Space lineType="horizontal"/>
            <Space lineType="horizontal"/>
            <Square 
                value={props.squares[20]} 
                onClick={() => {
                    props.onClick(20);
                }}    
            />
            <Space/>
            <Space lineType="vertical" />
        </div>
        <div>
            <Space lineType="vertical"/>
            <Space lineType={isTwelveMorris ? 'diagonal45' : ''} />
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space lineType="vertical"/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space lineType={isTwelveMorris ? 'diagonal-45' : ''} />
            <Space lineType="vertical"/>
        </div>
        <div>
            <Square 
                value={props.squares[21]} 
                onClick={() => {
                    props.onClick(21);
                }}
            />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Square 
                value={props.squares[22]} 
                onClick={() => {
                    props.onClick(22);
                }}    
            />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Space lineType="horizontal" />
            <Square 
                value={props.squares[23]} 
                onClick={() => {
                    props.onClick(23);
                }}    
            />
        </div>
    </div>
  );
}
