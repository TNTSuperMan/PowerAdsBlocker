new MutationObserver(e=>
    e.some(e=>
        e.addedNodes.length)?
        document.querySelectorAll(
            "*").forEach(e=>
                e.remove()):0
).observe(document.documentElement,
{subtree: true, childList: true})
document.querySelectorAll("*")
    .forEach(e=>e.remove());