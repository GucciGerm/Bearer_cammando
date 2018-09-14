import { RootComponent, BearerState } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  name: 'action',
  group: 'feature'
})
export class FeatureAction {
  // Define attachedPullRequests as a `BearerState`
  @BearerState() attachedPullRequests: Array<any> = []

  // Define a custom function that is going to be used when the scenario is completed
  attachPullRequest = ({ data, complete }): void => {
    // Update the BearerState attachedPullRequests property
    this.attachedPullRequests = [...this.attachedPullRequests, data.pullRequest]
    // Mark the scenario as complete
    complete()
}
render() {
  return (
    <bearer-navigator
      btnProps={{ content: 'Attach Pull Requests', kind: 'primary' }}
      direction="right"
      // connect our attachPullRequest function with the navigator
      complete={this.attachPullRequest}
    >
      <bearer-navigator-auth-screen />
      <bearer-navigator-screen navigationTitle="Repositories" name="repository">
	<list-repositories />
										        </bearer-navigator-screen>
											<bearer-navigator-screen
											  renderFunc={({ data }) => <list-pull-requests {...data} />}
	name="pullRequest"
	navigationTitle={data => data.repository.full_name}
      />
     </bearer-navigator>
    )
  }
}
