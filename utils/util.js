//监听加速计，用户摇晃手机超过阈值将执行callback函数
function shake(callback){
	var lastX = 0, lastY = 0, lastZ = 0
	wx.onAccelerometerChange(function(res){
		if(lastX || lastY || lastZ){
			let changeX = Math.abs(res.x - lastX)
			let changeY = Math.abs(res.x - lastY)
			let changeZ = Math.abs(res.x - lastZ)
			if(changeX >　2.7　|| changeY >　2.7　|| changeZ >　2.7){
				callback()
			}
		}
		lastX = res.x
		lastY = res.y
		lastZ = res.z
	})
}

module.exports.shake = shake
