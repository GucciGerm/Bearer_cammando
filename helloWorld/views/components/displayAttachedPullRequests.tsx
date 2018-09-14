import { Component, BearerState, State } from '@bearer/core'

@Component({
  tag: 'display-attached-pull-requests',
  shadow: true
})
export class DisplayAttachedPullRequests {
  @State() loading: boolean = true

  @BearerState({
    statePropName: 'attachedPullRequests'
  }) prs: Array<any> = []

  componentDidLoad() {
    this.loading = false
  }

  get hasAttachedPullRequest(): boolean {
    return Boolean(this.prs.length)
  }
  
  render() {
    if (this.loading) {
    return <bearer-loading />
    }
    const hasPrs = this.hasAttachedPullRequest
    return (
      <bearer-alert kind={hasPrs ? 'info' : 'secondary'}>
        {hasPrs && <ul>{this.prs.map(pr => <li>{pr.title}</li>)}</ul>}
	{!hasPrs && 'No Pull Request attached'}
      </bearer-alert>
    )
  }
}
