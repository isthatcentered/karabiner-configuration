import {
	FromKeyCode,
	layer,
	map,
	rule,
	ToKeyCode,
	writeToProfile,
} from "karabiner.ts";

// (--dry-run print the config json into console)
writeToProfile(
	"isthatcentered",
	[
		layer("spacebar", "symbols_layer").manipulators([
			map("j", "optionalAny").to("5"),
			map("k", "optionalAny").to("hyphen"),
		]),
		rule("Home row mods").manipulators([
			mapKeyHeld("a", "left_command"), //
			mapKeyHeld("s", "left_option"),
			mapKeyHeld("d", "left_shift"),
			mapKeyHeld("f", "left_control"),
			mapKeyHeld("j", "right_control"),
			mapKeyHeld("k", "right_shift"),
			mapKeyHeld("l", "right_option"),
			mapKeyHeld("semicolon", "right_command"),
		]),
	],
	{
		"basic.to_if_held_down_threshold_milliseconds": 150,
	},
);

function mapKeyHeld(from: FromKeyCode, to: ToKeyCode) {
	return map(from, "optionalAny")
		.toIfAlone({ key_code: from as ToKeyCode, halt: true })
		.toIfHeldDown(to);
}
