// Modes: 'swap', 'elevate',
// 'drop', 'set', 'elevateTo', 'dropTo'
const Mode = "swap";
const Token = event.data.token;

// The first value of height sets elevation
// with modes 'swap', 'set', and 'dropTo'
// The second value is the secondary target
// of swap or limit of 'elevate', 'drop',
// 'elevateTo' and 'dropTo'

const Height = [10, 0];

switch (Mode) {
	case "swap":
		if (Token.elevation == Height[0]) {
			Token.elevation = Height[1];
			Token.update({ elevation: Token.elevation });
		} else {
			Token.elevation = Height[0];
			Token.update({ elevation: Token.elevation });
		}
		break;

	case "elevate":
		Token.elevation += Height[0];
		Token.update({ elevation: Token.elevation });
		break;

	case "drop":
		if (Token.elevation <= Height[1]) {
			break;
		} else if (Token.elecation - Height[0] <= Height) {
			Token.elevation = Height[1];
			Token.update({ elevation: Token.elevation });
		} else {
			Token.elevation -= Height[0];
			Token.update({ elevation: Token.elevation });
		}
		break;

	case "set":
		Token.elevation = Height[0];
		Token.update({ elevation: Token.elevation });
		break;

	case "dropTo":
		if (Token.eleveation > Height[1]) {
			Token.elevation = Height[0];
			Token.update({ elevation: Token.elevation });
		}
		break;

	case "elevateTo":
		if (Token.elevation < Height[1]) {
			Token.elevation = Height[0];
			Token.update({ elevation: Token.elevation });
		}
		break;
}
