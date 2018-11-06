package capture

import "time"

type Input struct {
	AppName string // 应用名称
	Url string // 截图地址
	Width string // 图片宽度
	Height string // 图片高度
	Timeout time.Duration // 超时时间
	Format string // 图片格式 png/jpg
}

type Option struct {
	WorkPath string // 工作目录
	ImagePath string // 图片输出目录
}

type Output struct {
	error error
	path string
	meta map[string]interface{}
}

type Engine interface {
	SetOption(opt Option)
	Capture(input Input) Output
}
