<template>
	<header class="flex flex-row items-center w-full bg-white shadow-md">
		<nav class="flex items-center justify-between w-full h-full px-6 py-4 md:py-2 md:px-4">
			<RouterLink class="inline-flex flex-row items-center space-x-2 link"
				@click.native="$reortGaEvent('title', 'header')" to="/">
				<img src="./../assets/images/logo.png" alt="曼妙句子 Logo" width="40" height="40" />
				<h1 class="text-lg font-bold rainbow-text">曼妙句子</h1>
			</RouterLink>
			<div class="flex flex-row items-center justify-center space-x-6">
				<RouterLink @click="$reortGaEvent('list', 'header')" to="/list" class="text-base">列表</RouterLink>
				<RouterLink @click="$reortGaEvent('about', 'header')" to="/about" class="text-base">关于</RouterLink>
				<a target="_blank" rel="noreferrer" class="mx-3 text-gray-400 cursor-pointer hover:text-amber-500"
					href="https://x.com/MarshalXuan" @click="$reortGaEvent('x-MarshalXuan', 'header')">
					<svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="#212121" style="--sl-icon-size: 1em;">
						<path
							d="M 18.242188 2.25 L 21.554688 2.25 L 14.324219 10.507812 L 22.828125 21.75 L 16.171875 21.75 L 10.953125 14.933594 L 4.992188 21.75 L 1.679688 21.75 L 9.40625 12.914062 L 1.257812 2.25 L 8.082031 2.25 L 12.792969 8.480469 Z M 17.082031 19.773438 L 18.914062 19.773438 L 7.082031 4.125 L 5.113281 4.125 Z M 17.082031 19.773438 ">
						</path>
					</svg>
				</a>
				<a target="_blank" rel="noreferrer" class="mx-3 text-gray-400 cursor-pointer hover:text-amber-500"
					href="https://github.com/nicejade/read.lovejade.cn" @click="$reortGaEvent('github-repository', 'header')">
					<svg viewBox="0 0 16 16" fill="#131313" class="w-5 h-5">
						<path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
						</path>
					</svg>
				</a>
			</div>
		</nav>
	</header>
</template>

<style lang="scss">
.link {

	&:hover,
	&:focus,
	&:active {
		border: none !important;
		outline: none !important;
	}

	.rainbow-text {
		color: transparent;
		background-image: linear-gradient(0deg, #263238 38%, #515151 68%);
		background-clip: text;
		-webkit-background-clip: text;
	}
}
</style>
