import React from "react";

import { postRecentness, postLevels, sortings } from "./settings.js";

export default class ListingActions extends React.Component {
	render() {
		return (
			<div className={"listing-actions " + (this.props.className || "")}>
				{this.props.includeFilters ? (
					<div className="listing-actions__filters">
						{this.props.postRecentness && (
							<button
								className={
									"listing-actions__news-recent-button " +
									(this.props.postRecentness === postRecentness[1]
										? "listing-actions__news-recent-button-active"
										: "")
								}
								onMouseDown={e => {
									const val =
										this.props.postRecentness === postRecentness[0]
											? postRecentness[1]
											: postRecentness[0];
									this.props.onRecentnessChange &&
										this.props.onRecentnessChange(val);
								}}
							>
								<span style={{ borderBottom: "1px dashed" }}>Свежие</span>
							</button>
						)}
						<select
							className={`listing-actions__news-type-select ${
								this.props.postLevel.title !== postLevels[0].title
									? "listing-actions__news-type-select-selected"
									: ""
							}`}
							value={this.props.postLevel.title}
							onChange={e =>
								this.props.onPostLevelChange &&
								this.props.onPostLevelChange(e.target.value)
							}
						>
							{postLevels.map(x => (
								<option value={x.title} key={x.title}>
									{x.title}
								</option>
							))}
						</select>
					</div>
				) : (
					<div />
				)}
				<div className="listing-actions__sortings">
					<ul className="sortings-list">
						{(this.props.sortings || sortings).map(x =>
							x.title === this.props.sort.title ? (
								<li
									role="button"
									className="sortings-list__item sortings-list__current-item"
									key={x.title}
								>
									<label className="sortings-list__item-content sortings-list__current-item-content">
										<input
											type="radio"
											className="sortings-list__item-input"
											checked="true"
											name="post-sortings"
											value={x.title}
										/>
										{x.title}
									</label>
								</li>
							) : (
								<li
									role="button"
									className="sortings-list__item"
									onMouseDown={e =>
										this.props.onSortingChange && this.props.onSortingChange(x)
									}
									key={x.title}
								>
									<label className="sortings-list__item-content">
										<input
											type="radio"
											className="sortings-list__item-input"
											name="post-sortings"
											value={x.title}
										/>
										{x.title}
									</label>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		);
	}
}
