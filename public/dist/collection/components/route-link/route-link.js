export class RouteLink {
    handleClick(e) {
        console.log('Route link click', e);
        /*
        router.navigateTo(this.url)
        */
    }
    render() {
        /*
        const router = document.querySelector(this.router);
        const match = router.match
        console.log(`  <ion-route-link> Rendering route ${this.url}`, router, match);
    
        return (
          <a onClick={this.handleClick.bind(this)}><slot></slot></a>
        );
        */
    }
}
