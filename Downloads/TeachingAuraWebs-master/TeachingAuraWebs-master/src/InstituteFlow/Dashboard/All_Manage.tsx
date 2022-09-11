import React from "react";
import {Link} from "react-router-dom";


const All_Manage = (props) => {


    return (
			<React.Fragment>
				<div className='mr-3'>
					<Link to={props.c_redir} className='pLink p-0'>
						<div
							className='bo_caoe_card space-x-3'
							style={{ marginRight: 0, padding: '25px 40px' }}
						>
							{props.icon ? props.icon : <i className={props.c_icon} />}
							<h4 className='font-wg-500'>
								{props.c_name}: <span className='font-wg-550'>{props.c_value}</span>
							</h4>
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
};

export default All_Manage;
