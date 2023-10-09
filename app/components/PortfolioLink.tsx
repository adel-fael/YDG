"use client";

import Link from "next/link";

export const PortfolioLink = () => {
	return (
		<Link
			href={"https://adelfael.netlify.app/"}
			target="_blank"
			className="btn btn-accent items-center"
		>
			Adel
			<svg
				width="16px"
				height="16px"
				viewBox="0 0 16 16"
				id="meteor-icon-kit__regular-external-link-s"
				className="fill-current"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.5858 2H10C9.4477 2 9 1.55228 9 1C9 0.44772 9.4477 0 10 0H15C15.5523 0 16 0.44772 16 1V6C16 6.5523 15.5523 7 15 7C14.4477 7 14 6.5523 14 6V3.41421L7.2071 10.2071C6.8166 10.5976 6.1834 10.5976 5.79289 10.2071C5.40237 9.8166 5.40237 9.1834 5.79289 8.7929L12.5858 2zM6 1C6.5523 1 7 1.44772 7 2C7 2.55228 6.5523 3 6 3H3C2.44772 3 2 3.44772 2 4V13C2 13.5523 2.44772 14 3 14H11.9673C12.5154 14 12.9613 13.5589 12.9673 13.0109L13.0001 9.9891C13.0061 9.4369 13.4586 8.9941 14.0109 9.0001C14.5631 9.0061 15.0059 9.4586 14.9999 10.0109L14.9671 13.0326C14.9493 14.6766 13.6115 16 11.9673 16H3C1.34315 16 0 14.6569 0 13V4C0 2.34315 1.34315 1 3 1H6z"
				/>
			</svg>
		</Link>
	);
};
