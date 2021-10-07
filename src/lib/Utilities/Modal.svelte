<div id="background"></div>
<div class="modal-container">
	<div class="modal-header">
		<slot name="modal-header" />
        some modal
	</div>
	<div class="modal-body">
		<slot name="modal-body" />
        some modal
	</div>
</div>

<style>
    #background {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    .modal-container {
        position: fixed;
        z-index: 3;
        top: 50%;
        left: 50%;
        transform: translate(50%, -50%);
        background: red;
    }
</style>