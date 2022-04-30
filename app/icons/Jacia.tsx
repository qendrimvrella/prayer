import * as React from 'react';
import Svg, {
	SvgProps,
	G,
	Circle,
	Path,
	Defs,
	ClipPath,
	Rect,
} from 'react-native-svg';
import Layout from '../constants/Layout';

const Jacia = (props: SvgProps) => (
	<Svg
		width={Layout.window.width}
		height={Layout.window.width}
		viewBox="0 0 375 375"
		fill="none"
		{...props}>
		<G clipPath="url(#clip0_301_3535)">
			<Circle
				opacity={0.1}
				cx={195.5}
				cy={171.5}
				r={107.5}
				fill="white"
			/>
			<Circle opacity={0.1} cx={195.5} cy={171.5} r={85.5} fill="white" />
			<Circle opacity={0.1} cx={195.5} cy={171.5} r={67.5} fill="white" />
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M175.585 199.103C204.093 199.103 227.204 175.992 227.204 147.484C227.204 139.174 225.24 131.323 221.752 124.37C235.286 133.675 244.161 149.269 244.161 166.935C244.161 195.443 221.05 218.554 192.542 218.554C172.343 218.554 154.854 206.952 146.375 190.049C154.681 195.76 164.742 199.103 175.585 199.103Z"
				fill="#FEFEF1"
			/>
			<Path
				opacity={0.1}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M290.665 193C275.938 193 264 204.938 264 219.665C264 234.392 275.938 246.33 290.665 246.33H304.565C306.038 259.663 317.342 270.033 331.067 270.033H418.335C433.062 270.033 445 258.094 445 243.368C445 228.641 433.062 216.702 418.335 216.702H404.435C402.962 203.37 391.658 193 377.933 193H290.665Z"
				fill="white"
			/>
			<Path
				opacity={0.2}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M-119.5 90C-130.822 90 -140 99.1782 -140 110.5C-140 121.822 -130.822 131 -119.5 131H-58.5C-69.8218 131 -79 140.178 -79 151.5C-79 162.822 -69.8218 172 -58.5 172H-95.5C-106.822 172 -116 181.178 -116 192.5C-116 203.822 -106.822 213 -95.5 213H4.5C15.8218 213 25 203.822 25 192.5C25 181.178 15.8218 172 4.5 172H41.5C52.8218 172 62 162.822 62 151.5C62 140.178 52.8218 131 41.5 131H-19.5C-8.17816 131 1 121.822 1 110.5C1 99.1782 -8.17816 90 -19.5 90H-119.5Z"
				fill="white"
			/>
			<G filter="url(#filter0_f_301_3535)">
				<Path
					d="M327.266 74.1721C327.345 73.9426 327.655 73.9426 327.734 74.1721L328.445 76.2299C328.48 76.3302 328.569 76.3983 328.671 76.4019L330.759 76.4743C330.992 76.4823 331.087 76.7909 330.904 76.9408L329.255 78.285C329.175 78.3505 329.14 78.4607 329.169 78.5632L329.748 80.6658C329.813 80.9002 329.562 81.0909 329.369 80.9541L327.64 79.727C327.555 79.6672 327.445 79.6672 327.36 79.727L325.631 80.9541C325.438 81.0909 325.187 80.9002 325.252 80.6658L325.831 78.5632C325.86 78.4607 325.825 78.3505 325.745 78.285L324.096 76.9408C323.913 76.7909 324.008 76.4823 324.241 76.4743L326.329 76.4019C326.431 76.3983 326.52 76.3302 326.555 76.2299L327.266 74.1721Z"
					fill="#FEFEF1"
				/>
			</G>
			<G filter="url(#filter1_f_301_3535)">
				<Path
					d="M68.2659 193.172C68.3451 192.943 68.6549 192.943 68.7341 193.172L69.4451 195.23C69.4797 195.33 69.5692 195.398 69.6709 195.402L71.7588 195.474C71.9916 195.482 72.0873 195.791 71.9035 195.941L70.255 197.285C70.1747 197.351 70.1405 197.461 70.1687 197.563L70.7482 199.666C70.8128 199.9 70.5622 200.091 70.3694 199.954L68.6396 198.727C68.5553 198.667 68.4447 198.667 68.3604 198.727L66.6306 199.954C66.4378 200.091 66.1872 199.9 66.2518 199.666L66.8313 197.563C66.8595 197.461 66.8253 197.351 66.745 197.285L65.0965 195.941C64.9127 195.791 65.0084 195.482 65.2412 195.474L67.3291 195.402C67.4308 195.398 67.5203 195.33 67.5549 195.23L68.2659 193.172Z"
					fill="#FEFEF1"
				/>
			</G>
			<G filter="url(#filter2_f_301_3535)">
				<Path
					d="M339.266 321.172C339.345 320.943 339.655 320.943 339.734 321.172L340.445 323.23C340.48 323.33 340.569 323.398 340.671 323.402L342.759 323.474C342.992 323.482 343.087 323.791 342.904 323.941L341.255 325.285C341.175 325.351 341.14 325.461 341.169 325.563L341.748 327.666C341.813 327.9 341.562 328.091 341.369 327.954L339.64 326.727C339.555 326.667 339.445 326.667 339.36 326.727L337.631 327.954C337.438 328.091 337.187 327.9 337.252 327.666L337.831 325.563C337.86 325.461 337.825 325.351 337.745 325.285L336.096 323.941C335.913 323.791 336.008 323.482 336.241 323.474L338.329 323.402C338.431 323.398 338.52 323.33 338.555 323.23L339.266 321.172Z"
					fill="#FEFEF1"
				/>
			</G>
			<G filter="url(#filter3_f_301_3535)">
				<Path
					d="M354.266 21.1721C354.345 20.9426 354.655 20.9426 354.734 21.1721L355.445 23.2299C355.48 23.3302 355.569 23.3983 355.671 23.4019L357.759 23.4743C357.992 23.4823 358.087 23.7909 357.904 23.9408L356.255 25.285C356.175 25.3505 356.14 25.4607 356.169 25.5632L356.748 27.6658C356.813 27.9002 356.562 28.0909 356.369 27.9541L354.64 26.727C354.555 26.6672 354.445 26.6672 354.36 26.727L352.631 27.9541C352.438 28.0909 352.187 27.9002 352.252 27.6658L352.831 25.5632C352.86 25.4607 352.825 25.3505 352.745 25.285L351.096 23.9408C350.913 23.7909 351.008 23.4823 351.241 23.4743L353.329 23.4019C353.431 23.3983 353.52 23.3302 353.555 23.2299L354.266 21.1721Z"
					fill="#FEFEF1"
				/>
			</G>
			<G filter="url(#filter4_f_301_3535)">
				<Path
					d="M58.2659 239.172C58.3451 238.943 58.6549 238.943 58.7341 239.172L59.4451 241.23C59.4797 241.33 59.5692 241.398 59.6709 241.402L61.7588 241.474C61.9916 241.482 62.0873 241.791 61.9035 241.941L60.255 243.285C60.1747 243.351 60.1405 243.461 60.1687 243.563L60.7482 245.666C60.8128 245.9 60.5622 246.091 60.3694 245.954L58.6396 244.727C58.5553 244.667 58.4447 244.667 58.3604 244.727L56.6306 245.954C56.4378 246.091 56.1872 245.9 56.2518 245.666L56.8313 243.563C56.8595 243.461 56.8253 243.351 56.745 243.285L55.0965 241.941C54.9127 241.791 55.0084 241.482 55.2412 241.474L57.3291 241.402C57.4308 241.398 57.5203 241.33 57.5549 241.23L58.2659 239.172Z"
					fill="#FEFEF1"
				/>
			</G>
			<G filter="url(#filter5_f_301_3535)">
				<Path
					d="M351.266 279.172C351.345 278.943 351.655 278.943 351.734 279.172L352.445 281.23C352.48 281.33 352.569 281.398 352.671 281.402L354.759 281.474C354.992 281.482 355.087 281.791 354.904 281.941L353.255 283.285C353.175 283.351 353.14 283.461 353.169 283.563L353.748 285.666C353.813 285.9 353.562 286.091 353.369 285.954L351.64 284.727C351.555 284.667 351.445 284.667 351.36 284.727L349.631 285.954C349.438 286.091 349.187 285.9 349.252 285.666L349.831 283.563C349.86 283.461 349.825 283.351 349.745 283.285L348.096 281.941C347.913 281.791 348.008 281.482 348.241 281.474L350.329 281.402C350.431 281.398 350.52 281.33 350.555 281.23L351.266 279.172Z"
					fill="#FEFEF1"
				/>
			</G>
			<G filter="url(#filter6_f_301_3535)">
				<Path
					d="M61.2659 41.1721C61.3451 40.9426 61.6549 40.9426 61.7341 41.1721L62.4451 43.2299C62.4797 43.3302 62.5692 43.3983 62.6709 43.4019L64.7588 43.4743C64.9916 43.4823 65.0873 43.7909 64.9035 43.9408L63.255 45.285C63.1747 45.3505 63.1405 45.4607 63.1687 45.5632L63.7482 47.6658C63.8128 47.9002 63.5622 48.0909 63.3694 47.9541L61.6396 46.727C61.5553 46.6672 61.4447 46.6672 61.3604 46.727L59.6306 47.9541C59.4378 48.0909 59.1872 47.9002 59.2518 47.6658L59.8313 45.5632C59.8595 45.4607 59.8253 45.3505 59.745 45.285L58.0965 43.9408C57.9127 43.7909 58.0084 43.4823 58.2412 43.4743L60.3291 43.4019C60.4308 43.3983 60.5203 43.3302 60.5549 43.2299L61.2659 41.1721Z"
					fill="#FEFEF1"
				/>
			</G>
			<G filter="url(#filter7_f_301_3535)">
				<Path
					d="M319.266 151.172C319.345 150.943 319.655 150.943 319.734 151.172L320.445 153.23C320.48 153.33 320.569 153.398 320.671 153.402L322.759 153.474C322.992 153.482 323.087 153.791 322.904 153.941L321.255 155.285C321.175 155.351 321.14 155.461 321.169 155.563L321.748 157.666C321.813 157.9 321.562 158.091 321.369 157.954L319.64 156.727C319.555 156.667 319.445 156.667 319.36 156.727L317.631 157.954C317.438 158.091 317.187 157.9 317.252 157.666L317.831 155.563C317.86 155.461 317.825 155.351 317.745 155.285L316.096 153.941C315.913 153.791 316.008 153.482 316.241 153.474L318.329 153.402C318.431 153.398 318.52 153.33 318.555 153.23L319.266 151.172Z"
					fill="#FEFEF1"
				/>
			</G>
			<G filter="url(#filter8_f_301_3535)">
				<Path
					d="M95.2659 69.1721C95.3451 68.9426 95.6549 68.9426 95.7341 69.1721L96.4451 71.2299C96.4797 71.3302 96.5692 71.3983 96.6709 71.4019L98.7588 71.4743C98.9916 71.4823 99.0873 71.7909 98.9035 71.9408L97.255 73.285C97.1747 73.3505 97.1405 73.4607 97.1687 73.5632L97.7482 75.6658C97.8128 75.9002 97.5622 76.0909 97.3694 75.9541L95.6396 74.727C95.5553 74.6672 95.4447 74.6672 95.3604 74.727L93.6306 75.9541C93.4378 76.0909 93.1872 75.9002 93.2518 75.6658L93.8313 73.5632C93.8595 73.4607 93.8253 73.3505 93.745 73.285L92.0965 71.9408C91.9127 71.7909 92.0084 71.4823 92.2412 71.4743L94.3291 71.4019C94.4308 71.3983 94.5203 71.3302 94.5549 71.2299L95.2659 69.1721Z"
					fill="#FEFEF1"
				/>
			</G>
		</G>
		<Defs>
			<ClipPath id="clip0_301_3535">
				<Rect width={375} height={375} fill="white" />
			</ClipPath>
		</Defs>
	</Svg>
);

export default Jacia;