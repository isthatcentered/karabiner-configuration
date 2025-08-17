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
			map("u", "optionalAny").to("5", "right_option"), // {
			map("i", "optionalAny").to("hyphen", "right_option"), // }
			map("o", "optionalAny").to("grave_accent_and_tilde"), // <
			map("p", "optionalAny").to("grave_accent_and_tilde", "left_shift"), // >
			map("j", "optionalAny").to("5"), // (
			map("k", "optionalAny").to("hyphen"), // )
			map("l", "optionalAny").to("3"), // "
			map("m", "optionalAny").to("5", ["right_option", "left_shift"]), // [
			map("comma", "optionalAny").to("hyphen", ["right_option", "left_shift"]), // ]
			map("a", "optionalAny").to("equal_sign", "left_shift"), // _
			map("s", "optionalAny").to("close_bracket"), // $
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
		"basic.to_if_held_down_threshold_milliseconds": 100,
		"basic.to_delayed_action_delay_milliseconds": 100,
	},
);

function mapKeyHeld(from: FromKeyCode, to: ToKeyCode) {
	return map(from, "optionalAny")
		.toIfAlone({ key_code: from as ToKeyCode, halt: true })
		.toDelayedAction([], { key_code: from as ToKeyCode })
		.toIfHeldDown(to);
}
