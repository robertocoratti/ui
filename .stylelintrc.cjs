module.exports = {
	extends: ["stylelint-config-sass-guidelines"],
	rules: {
		"max-nesting-depth": null,
		"no-descending-specificity": null,
		"selector-class-pattern": null,
		"selector-no-qualifying-type": null,
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["layer", "forward", "use"],
			},
		],
	},
}
