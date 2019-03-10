# CSS权威指南学习笔记 #

这本书绝对是每个前端程序员必读的经典。之前通过一些网上教程对CSS进行了学习，但是总是觉得知其然而不知其
 所以然。通过阅读这本书，让我对CSS的原理有了更加透彻的理解。个人认为书中较为经典的章节有：<br>
<br>

1. line-height最好在父元素中设为一个数字，如p{line-height:1.5}，这样行间距就会自动根据字体大小（font-size）调整，如果想改变某个line-height，也可以具体设置进行覆盖，如em{line-height:1em}
2. 
display:inline-block可以用于导航栏
display:run-in 后面必须是块级元素




1. vertical-align取值：bottom：跟行框最下端对齐 ；top:跟行框最上端对齐；text-bottom:跟内容框最下端对齐；text-top：跟内容框最上端对齐；middle：跟行框（内容框）中间线对齐；baseline:四线三格第三条线；百分数：相对于baseline上移或者下移百分比*line-height的高度。


1. 当margin设为百分数的时候，即使是上下外边距也是根据父元素的width计算的


1. 设置border的时候必须要先声明border-style属性，否则其它属性都将会无效，因为border-style默认为none，你不能设置一个不存在的东西。


1. border三大属性：style,color,width,顺序不影响



1. 一般有边框都要设置一下内边距，不然挨着不好看。



1. 对于行内元素，设置内外边距都不影响行框高度，但可以影响左右，外边距可以应用到跨行的左右两边，而内边距不能跨行。



1. 浮动元素与正常流中内容发生重叠的时候：行内元素：其边框，背景和内容都在浮动元素之上
块级元素：边框和背景在浮动元素之下，内容在浮动元素之上。



1. 绝对定位元素的时候，left,right,top(没有bottom)如果被设置为auto，那么会按照它的position为static来放置，也就是按照静态位置放置。



1. 绝对元素定位时，对于非替换元素，水平方向上，如果margin-left,left,width,right,margin-right都声明了，但是他们计算的和不为包含块的width，会将right重置为auto，重新计算值；如果是垂直方向，bottom被重置为auto。



1. 当position被设置为absolute之后，利用margin:auto，可以同时实现水平和垂直居中，而不会像在文档流中那样margin-top和margin-bottom被重置为0.



1. z-index是一个相对值，相对其父元素设置。如一个p的z-index设为7，而另一个p设为1，在第一个p中em元素设为-1，但是在显示的时候，em仍然可以覆盖第二个p，因为她在第一个之内，相当于它的z-index为7,-1，是大于1的。还要注意z-index只有在定位时才可以用，即position为absolute,relative,fixed。



1. 在相对定位中top=-bottom,left=-right,如果不满足，则按top和left的值重置bottom和right。



1. 在固定定位（fixed）是相对于视窗定位，也就是固定在屏幕上某个部分，无论其它部分如何滑动都会在屏幕上显示。