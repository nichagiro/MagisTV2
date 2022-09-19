<style>
    .container-social {
        right: 15px;
        bottom: 75px;
        position: fixed;
        z-index: 11;
    }
    .socials {
        width: 44px;
        height: 44px;
        color: #fff;
        text-align: center;
        font-size: 16px;
        border-radius: 50%;
        transition: background .5s;
        padding: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .socials:hover, :focus {
        color: white
    } 
</style>

<div class="container-social">
    @if ($instagram)
        <a 
            href="https://www.instagram.com/magistvinter/"
            class="socials bg-purple my-1 shadow"
            >
            <i class="fab fa-instagram"></i>
        </a>
    @endif
    @if ($telegram)        
        <a 
            href=""
            class="socials bg-blue my-1 shadow"
            >
            <i class="fab fa-telegram-plane"></i>
        </a>        
    @endif
</div>

