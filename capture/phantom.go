package capture

type Phantom struct {
	options * Option
}

func (ctx * Phantom) SetOption(option Option) {
	ctx.options = &option
}

func (ctx * Phantom) Capture (input Input) (res Output) {
	return res
}
