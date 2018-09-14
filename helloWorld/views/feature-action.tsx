import { RootComponent } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  name: 'action',
  group: 'feature'
})
export class FeatureAction {
  render() {
    return (
      <div>
	<bearer-navigator btnProps={ {content:"helloWorld", kind:"primary"} } direction="right">
	  <bearer-navigator-auth-screen />
	  <bearer-navigator-screen navigationTitle="Repositories" name="repository">
	    <list-repositories />
	  </bearer-navigator-screen>
	  <bearer-navigator-screen
	    // data will be passed to list-pull-requests as 'this' keyword
	    renderFunc={({ data }) => <list-pull-requests {...data} />}
	    name="pullRequest"
	    navigationTitle={data => data.repository.full_name}
	  />
	</bearer-navigator>
      </div>
    )
  }
}
